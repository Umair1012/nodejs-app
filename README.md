# 🚀 L4/L7 Load Balancer Demo Setup

This project demonstrates a simple Node.js Express setup for testing L4 and L7 load balancing using multiple VMs.

---

## 1. Prerequisites (IMPORTANT)

Run the following commands on both VM1 and VM2:

```bash
sudo apt update
sudo apt install nodejs npm -y
npm init -y
npm install express
```

## 2. Set VM1 Name (important for L4/L7 testing)
```bash
export VM_NAME="VM1-USER-SERVER"
```

## 3. Set VM2 Name (important for L4/L7 testing)
```bash
export VM_NAME="VM2-ORDER-SERVER"
```

## 4. Run the application
```bash
node app.js
```

## 5. Expected Output
```bash
Running on 3000
```
