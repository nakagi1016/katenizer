const firebaseConfig = {
  apiKey: "AIzaSyDl4gMuF9e2Esst0FHOVOC3JhIQEFBYDBY",
  authDomain: "katenizer-85e4a.firebaseapp.com",
  databaseURL: "https://katenizer-85e4a-default-rtdb.firebaseio.com",
  projectId: "katenizer-85e4a",
  storageBucket: "katenizer-85e4a.appspot.com", // ←ここの修正も反映済み！
  messagingSenderId: "525326072527",
  appId: "1:525326072527:web:14c9ab2952956e46fd15ba"
};

// 互換モードで初期化（これが重要！）
firebase.initializeApp(firebaseConfig);
