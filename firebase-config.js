// Firebase 設定（実際のプロジェクト情報を入力）
const firebaseConfig = {
    apiKey: "AIzaSyAqSBMLjOA_t8HpF9DOG1Ii6-DYPPA-p5k",
    authDomain: "farmm-12ab5.firebaseapp.com",
    databaseURL: "https://console.firebase.google.com/u/1/project/farmm-12ab5/database/farmm-12ab5-default-rtdb/data/~2F",
    projectId: "farmm-12ab5",
    storageBucket: "farmm-12ab5.firebasestorage.app",
    messagingSenderId: "1007963653804",
    appId: "1:1007963653804:web:cebee6bbfaa3057b928109"
};

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);

// Firestoreデータベースを取得
const db = firebase.firestore();
