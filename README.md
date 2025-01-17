# Auto Scaling Group - Load Balancer 

## Members:
- Jesica Pincha
- Karina Simbaña

## 📘 About The Project
This project demonstrates a simple Node.js REST API application using Express.js. The application is designed to showcase integration with AWS services such as EC2, Load Balancer, and Auto Scaling Group for efficient and scalable infrastructure management.

**QA Branch:** Automatically deploys to two instances with a load balancer using an autoscaling group when you push.

**Main Branch:** Deploys to four instances using a load balancer and an autoscaling group. are executed when you make a pull request.

## 📑 Table of Contents

- [📘 About The Project](#about-the-project)
- [🚀 Getting Started](#getting-started)
  - [🔧 Prerequisites](#prerequisites)
  - [📥 Installation](#installation)
  - [⚙️ Running](#running)
- [🤝 Contributing](#contributing)

## 🚀 Getting Started
## 🔧 Prerequisites
**AWS account with a configured EC2 instance, load balancer, and production settings.**
- Make sure you have Node.js installed on your system. You can check your version by running:
```bash
node --version
 ```
- DockerHub account and GitHub
- SSH keys generated for secure connections (check yml files)

## 📥 Installation
1.- Clone the repository

   ```sh
   git clone https://github.com/Karina1014/Aws_Task_Auto_Scaling_and_LB.git
  ```
2.- Install dependencies:
   ```sh
npm install
  ```
## ⚙️ Running
1. Make a push or pull request

2. Open your browser and visit:
```sh
LoadbalanceQA-1283402581.us-east-1.elb.amazonaws.com
```

You can view all EC2 instances that were created for both QA and production within your AWS account. Through any of these IPs you can access the display of the web page.

![image](https://github.com/user-attachments/assets/da96a54d-6a42-4bf1-b2b4-42697fad7d6d)


Within the AWS load balancer service, you can view those that were created for both QA and Production.


![image](https://github.com/user-attachments/assets/4c09faf3-296d-486c-98b6-473f5ae8444a)


Within the AWS service, 2 target groups are created for both QA and Production.

![image](https://github.com/user-attachments/assets/b46f3c47-e5a8-4d7e-870a-b997f32f2e41)


The ASG is created that are necessary for the instances that relate to the production EC2s.

![image](https://github.com/user-attachments/assets/60961076-4621-47b0-b709-23ba2d44579b)


 A launch template is created within AWS services.

![image](https://github.com/user-attachments/assets/a94a4115-79d8-429e-8530-6ad5256924f5)

## Docker

![image](https://github.com/user-attachments/assets/fc5e76fb-6fad-4da2-a1d8-f7f8145ce3e2)

## Result

![image](https://github.com/user-attachments/assets/cf45af58-21e6-4e59-8414-4db22285580f)


![image](https://github.com/user-attachments/assets/4b8f3da5-a150-43fa-ad6a-829b2bdc3416)


## 🤝 Contributing
Thank you for your interest in contributing to this project! Here are some guidelines for doing so:
1. **Fork the repository** and clone the project to your local machine.
2. **Create a new branch** for your changes.
3. **Commit your changes** with a clear, descriptive message.
4. **Submit a Pull Request** with a description of your changes.

Thank you for helping improve this project!
