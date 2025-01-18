# GreenGuru

GreenGuru is a web app designed for seedling classification and weed detection. Using advanced computer vision models, it accurately identifies 12 types of seedlings, including:

- Black-grass
- Charlock
- Cleavers
- Common Chickweed
- Common wheat
- Fat Hen
- Loose Silky-bent
- Maize
- Scentless Mayweed
- Shepherd's Purse
- Small-flowered Cranesbill
- Sugar beet

This app ensures efficient predictions and reliable results to support agriculture and plant management.

![logo](https://github.com/user-attachments/assets/c683ca61-ff8b-44f3-8ba4-9091a95ba63f)

---

## 🧰 Tech Stack

**Frontend:** Next.js\
**Backend:** Flask\
**Development Environment:** Google Colab\
**Tunneling:** Ngrok\
**Deployment:** Vercel

**Machine Learning Method:** CNN (Convolutional Neural Network)
You can test the classification using static machine learning techniques(KNN, SVM and RandomForest) and manual feature extraction(based on contour and LBP (Local Binary Patterns) methods.

---

## 📑 Prerequisites

- **GreenGuru-FlaskApp**: [Google Colab Notebook](https://colab.research.google.com/drive/1cQZYiSjab9FcEUCnW63_H2AJ-oCo4jF_?usp=sharing&fbclid=IwZXh0bgNhZW0CMTAAAR36v4yoOgB6I2IWXBzTXhhcaGIpfSH818gCuD6zJCImKL4PvM3ov67K5ZY_aem_X8GU9F1lTc6E6r3HsbbGRg#scrollTo=VjPNKzsYol4G)
- **Ngrok Account**: [Ngrok Website](https://dashboard.ngrok.com/)

---

## 🔥 Features

- Classify plants into 12 categories, as listed above.
- Detect parasitic herbs using machine learning.
- Simple and intuitive interface for plant management.

---

## 🚀 Getting Started

### 1. Create an Ngrok Account

**Ngrok** is used to create a tunnel, connecting the Flask app (running in Google Colab) to the GreenGuru user interface.

1. Visit the [Ngrok Website](https://dashboard.ngrok.com/) and sign up for an account.
2. Go to your dashboard and locate your **Authtoken** under the "Auth" section.
3. Copy the **Authtoken** for later use.

![AuthToken](https://github.com/user-attachments/assets/c65b67bf-ee54-462b-9afc-1996aa4ea254)

### 2. Setup GreenGuru-FlaskApp

#### 2.1 Open the GreenGuru-FlaskApp

- Open the [GreenGuru-FlaskApp](https://colab.research.google.com/drive/1cQZYiSjab9FcEUCnW63_H2AJ-oCo4jF_?usp=sharing&fbclid=IwZXh0bgNhZW0CMTAAAR36v4yoOgB6I2IWXBzTXhhcaGIpfSH818gCuD6zJCImKL4PvM3ov67K5ZY_aem_X8GU9F1lTc6E6r3HsbbGRg#scrollTo=VjPNKzsYol4G).

#### 2.2 Configure Your GreenGuru-FlaskApp

- Paste your Ngrok **Authtoken** in the designated code section of the notebook.

![NgrokSetup](https://github.com/user-attachments/assets/9462d1d9-0080-45c1-be7c-99afb4ffe439)

#### 2.3 Run the GreenGuru-FlaskApp

1. Run the initial part of the notebook.
2. Once executed, an Ngrok URL will be generated (e.g., `https://xyz.ngrok-free.app`). This URL connects your Flask server to the internet.

![NgrokLink](https://github.com/user-attachments/assets/2804e158-f256-4244-afed-f4c0e69fd54b)

3. Alternatively, check the running Ngrok Agent on the [Ngrok Agents](https://dashboard.ngrok.com/agents).

### 3. Setup GreenGuru GUI

#### 3.1 Open the GreenGuru GUI

- Open the [GreenGuru GUI](https://green-guru.vercel.app/).

![GreenGuruDashboard](https://github.com/user-attachments/assets/307f6a4f-9508-4e0d-b9bf-11b8528e6dec)

#### 3.2 Enter Details

- Paste the **Ngrok URL** from the previous step into the input field.

![GreenGuruColabConnect](https://github.com/user-attachments/assets/251d6a2f-e89f-499d-aa3d-e52bda2a5fb2)

### 4. Run the App

- Click **"Connect"** to start classifying plants.
- Upload plant pictures to get real-time classifications.

---

## 🔧 Troubleshooting

- **Flask App Down:** If the Flask app is not running, restart the GreenGuru-FlaskApp in Google Colab (refer to Step 2).
- **Ngrok Issues:** If the Ngrok Agent is down, restart it and regenerate the Ngrok URL.
- **Notebook Crashes:** If the Google Colab notebook crashes, refresh the page and rerun the cells.

---

Enjoy using GreenGuru to classify plants and detect parasitic herbs effortlessly!

## 📝 Authors

- GitHub: [@bensaied](https://www.github.com/bensaied)

## Contributing

Contributions are always welcome! Feel free to fork this repository and submit pull requests.

- [Ghassen Ben Ali](https://github.com/ghassenbenali96)
- [Ikram Loued](https://github.com/Ikramloued)

## 💝 Support

For support, don't forget to leave a star ⭐️.

## ⚖️ License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## 🔗 Links

- **Oussama Ben Saied** : [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bensaied/)
- **Ghassen Ben Ali** : [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ghassen-ben-ali-36a904194/)
- **Ikram Loued** : [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ikram-loued/)
