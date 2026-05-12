pipeline {
    agent { docker { image 'node:18-alpine' } }
    environment {
        NPM_REGISTRY = 'https://registry.npmjs.org'
    }
    stages {
        stage('List') {
            steps { sh 'node --version && npm --version && ls -la' }
        }
        stage('Build') {
            steps { 
                sh 'npm install'
                sh 'npm run build'
                stash name: 'output', includes: 'dist/, package.json'
            }
        }
        stage('Verify') {
            parallel {
                stage('Test') { steps { sh 'npm test' } }
                stage('Security Audit') { steps { sh 'npm audit --production || true' } }
            }
        }
        stage('Archive') {
            steps { 
                unstash 'output'
                archiveArtifacts artifacts: 'dist/*'
            }
        }
        stage('Publish') {
            steps {
                unstash 'output'
                withCredentials([string(credentialsId: 'npm-token', variable: 'NPM_TOKEN')]) {
                    sh '''
                        VERSION="1.0.0-${GIT_COMMIT:0:8}"
                        npm version $VERSION --no-git-tag-version
                        echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc
                        npm publish --access public
                        rm .npmrc
                    '''
                }
            }
        }
    }
    post {
        always { cleanWs() }
        success { echo "Published!" }
        failure { echo "Failed" }
        changed { echo "Status changed" }
    }
}
