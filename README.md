# Mobility-Hack
# 5-Minute Traffic Predictor

A zero-dependency, lightweight micro-solution to predict urban traffic congestion over the next 5 minutes.

## Features
- **Antigravity Powered**: Utilizes pure standard Python libraries.
- **Pre-Congestion Alert**: Detects edge cases where current traffic is low, but predictive indicators signal an imminent spike.
- **Automated Grading Ready**: Outputs strict JSON to `stdout` with clean exit codes (`0` for success).

## Logic Breakdown
The algorithm calculates a Base Congestion Score (0-100) using a weighted linear combination:
- Current Traffic (40%)
- Historical Patterns (30%)
- Time Factor (20%)
- Special Events (10%)

## Execution
Run the script to generate predictions for the required test cases:
```bash
python main.py
