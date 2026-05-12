# Reflection – Week 5 Friday

## 1. Tension between requirements
The tension was between using a Docker agent (required) and my Jenkins environment not having Docker-in-Docker support. I prioritized getting a working pipeline using `agent any` and documented the trade-off.

## 2. Board vs technical language
Board sentence: "The pipeline runs tests and security checks at the same time."  
Technical sentence: "The Verify stage executes parallel branches: Test and Security Audit."  
Same information: both describe parallel execution. Different: technical version names specific Jenkins concepts.

## 3. Scaling from 4 to 40 developers
The single Jenkins node would be the bottleneck. Solution: use Kubernetes agents or add more build nodes.
