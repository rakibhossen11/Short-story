const { View, Text, StyleSheet, TouchableOpacity } = require("react-native");

const Home = ({navigation}) =>{
  
  const data = [
    { "id": 1, "title": "The Enchanted Forest", "genre": "Fantasy", "des":"একসময়ের কথা। একটি গ্রামে ছিল একটি ছোট বালক নামে মোজাম্মেল। মোজাম্মেলের মনে সবসময় অনেক অলৌকিক স্বপ্ন ছিল। একদিন, মোজাম্মেল অনেক ভালোভাবে ঘুমিয়ে পড়ে এবং একটি অলৌকিক স্বপ্নে পড়ে। স্বপ্নে তিনি একটি বৃহত্তর উড়ানযান করতে দেখতেন। সেখানে তিনি দেখতেন একজন প্রাণী হিসাবে পাখির মতো উড়াতে। তার দিকে তিনি চমকে পড়েন। এই স্বপ্নের জন্য মোজাম্মেল খুব উৎসাহিত হয়ে উঠে। তিনি জানতে চান এই অলৌকিক স্বপ্নের অর্থ কী। স্বপ্নে দেখা পুরো বারি থেকে তার মনে তিনি অনেক অদ্ভুত উপলব্ধির সাথে বাঁধা হয়ে আছেন। অতএব, মোজাম্মেল এই বিষয়ে আরও অনুসন্ধান করতে চান। এক দিন, একটি পুস্তকে মোজাম্মেল পড়তে আটকে গিয়েছেন। এটি একজন বৃদ্ধ মানুষের প্রস্তাবনা ছিল। বৃদ্ধ মানুষটি একজন বিজ্ঞানী ছিলেন। মোজাম্মেল তার স্বপ্ন সম্পর্কে তাকে বললেন। বৃদ্ধ বিজ্ঞানী মোজাম্মেলের কাছে জানালেন, তুমি যদি সঠিক সম্পর্কে অনুসন্ধানমতো উড়াতে। তার দিকে তিনি চমকে পড়েন। এই স্বপ্নের জন্য মোজাম্মেল খুব উৎসাহিত হয়ে উঠে। তিনি জানতে চান এই অলৌকিক স্বপ্নের অর্থ কী। স্বপ্নে মোজাম্মেল পড়তে আটকে গিয়েছেন। এটি একজন বৃদ্ধ মানুষের প্রস্তাবনা ছিল। বৃদ্ধ মানুষটি একজন বিজ্ঞানী ছিলেন। মোজাম্মেল তার স্বপ্ন সম্পর্কে তাকে বললেন। বৃদ্ধ বিজ্ঞানী মোজাম্মেলের কাছে জানালেন, তুমি যদি সঠিক সম্পর্কে অনুসন্ধানমতো উড়াতে। তার দিকে তিনি চমকে পড়েন। এই স্বপ্নের জন্য মোজাম্মেল খুব উৎসাহিত হয়ে উঠে। তিনি জানতে চান এই অলৌকিক স্বপ্নের অর্থ কী। স্বপ্নেমোজাম্মেল পড়তে আটকে গিয়েছেন। এটি একজন বৃদ্ধ মানুষের প্রস্তাবনা ছিল। বৃদ্ধ মানুষটি একজন বিজ্ঞানী ছিলেন। মোজাম্মেল তার স্বপ্ন সম্পর্কে তাকে বললেন। বৃদ্ধ বিজ্ঞানী মোজাম্মেলের কাছে জানালেন, তুমি যদি সঠিক সম্পর্কে অনুসন্ধানমতো উড়াতে। তার দিকে তিনি চমকে পড়েন। এই স্বপ্নের জন্য মোজাম্মেল খুব উৎসাহিত হয়ে উঠে। তিনি জানতে চান এই অলৌকিক স্বপ্নের অর্থ কী। স্বপ্নেমোজাম্মেল পড়তে আটকে গিয়েছেন। এটি একজন বৃদ্ধ মানুষের প্রস্তাবনা ছিল। বৃদ্ধ মানুষটি একজন বিজ্ঞানী ছিলেন। মোজাম্মেল তার স্বপ্ন সম্পর্কে তাকে বললেন। বৃদ্ধ বিজ্ঞানী মোজাম্মেলের কাছে জানালেন, তুমি যদি সঠিক সম্পর্কে অনুসন্ধানমতো উড়াতে। তার দিকে তিনি চমকে পড়েন। এই স্বপ্নের জন্য মোজাম্মেল খুব উৎসাহিত হয়ে উঠে। তিনি জানতে চান এই অলৌকিক স্বপ্নের অর্থ কী। স্বপ্নেমোজাম্মেল পড়তে আটকে গিয়েছেন। এটি একজন বৃদ্ধ মানুষের প্রস্তাবনা ছিল। বৃদ্ধ মানুষটি একজন বিজ্ঞানী ছিলেন। মোজাম্মেল তার স্বপ্ন সম্পর্কে তাকে বললেন। বৃদ্ধ বিজ্ঞানী মোজাম্মেলের কাছে জানালেন, তুমি যদি সঠিক সম্পর্কে অনুসন্ধানমতো উড়াতে। তার দিকে তিনি চমকে পড়েন। এই স্বপ্নের জন্য মোজাম্মেল খুব উৎসাহিত হয়ে উঠে। তিনি জানতে চান এই অলৌকিক স্বপ্নের অর্থ কী। স্বপ্নে দেখা পুরো বারি থেকে তার মনে তিনি অনেক অদ্ভুত উপলব্ধির সাথে বাঁধা হয়ে আছেন। অতএব, মোজাম্মেল এই বিষয়ে আরও অনুসন্ধান করতে চান। এক দিন, একটি পুস্তকে মোজাম্মেল পড়তে আটকে গিয়েছেন। এটি একজন বৃদ্ধ মানুষের প্রস্তাবনা ছিল। বৃদ্ধ মানুষটি একজন বিজ্ঞানী ছিলেন। মোজাম্মেল তার স্বপ্ন সম্পর্কে তাকে বললেন। বৃদ্ধ বিজ্ঞানী মোজাম্মেলের কাছে জানালেন, তুমি যদি সঠিক সম্পর্কে অনুসন্ধানমতো উড়াতে। তার দিকে তিনি চমকে পড়েন। এই স্বপ্নের জন্য মোজাম্মেল খুব উৎসাহিত হয়ে উঠে। তিনি জানতে চান এই অলৌকিক স্বপ্নের অর্থ কী। স্বপ্নে দেখা পুরো বারি থেকে তার মনে তিনি অনেক অদ্ভুত উপলব্ধির সাথে বাঁধা হয়ে আছেন। অতএব, মোজাম্মেল এই বিষয়ে আরও অনুসন্ধান করতে চান। এক দিন, একটি পুস্তকে মোজাম্মেল পড়তে আটকে গিয়েছেন। এটি একজন বৃদ্ধ মানুষের প্রস্তাবনা ছিল। বৃদ্ধ মানুষটি একজন বিজ্ঞানী ছিলেন। মোজাম্মেল তার স্বপ্ন সম্পর্কে তাকে বললেন। বৃদ্ধ বিজ্ঞানী মোজাম্মেলের কাছে জানালেন, তুমি যদি সঠিক সম্পর্কে অনুসন্ধান করে তা আবিষ্কার করো, তাহলে তুমি তোমার স্বপ্নগুলি বাস্তবায়ন করতে পারবে।তারপরে মোজাম্মেল একজন বৃদ্ধ বিজ্ঞানী হিসেবে একটি মন্ত্র নিয়ে যায়েন। তিনি প্রচুর পরিশ্রম এবং অনুশাসনের সাথে বিজ্ঞানের প্রাসাদ গ্রহণ করেন।শেষে, মোজাম্মেল হিসেবে একজন অগ্রাধিকারী বিজ্ঞানী হয়ে উঠেন। তার অলৌকিক স্বপ্নগুলি এখন বাস্তবায়ন হয়েছে। তিনি জাতির জন্য অমূল্য কাজ করেন এবং সত্যিকারের একটি স্বপ্ন দেখতে সাহায্য করেন। এই গল্প একটি নিখুত অনুমানের দিকে পরিচ" },
    { "id": 2, "title": "A Twist of Fate", "genre": "Drama" },
    { "id": 3, "title": "Echoes of Eternity", "genre": "Science Fiction" },
    { "id": 4, "title": "Whispers in the Wind", "genre": "Mystery" },
    { "id": 5, "title": "Chronicles of the Cosmos", "genre": "Adventure" },
    { "id": 6, "title": "Eternal Love", "genre": "Romance" },
    { "id": 7, "title": "The Forgotten Kingdom", "genre": "Historical Fiction" },
    { "id": 8, "title": "Shadows of the Past", "genre": "Thriller" },
    { "id": 9, "title": "Harmony of the Elements", "genre": "Fantasy" },
    { "id": 10, "title": "Beyond the Horizon", "genre": "Adventure" }
  ];  

  return(
    <View style={styles.container}>
      {data.map((story) => (
        <TouchableOpacity style={styles.listContainer} key={story.id}
        onPress={() => navigation.navigate('story',{story})}
        >
          <Text style={styles.titleText}>{story.title}</Text>
          <Text style={styles.genreText}>{story.genre}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {

  },
  listContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBlockColor: 'black',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  genreText: {
    
  }
});

export default Home;














// import React, { useState } from "react";
// import {
//   FlatList,
//   Modal,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const ListItem = ({ item, onpress }) => (
//   <TouchableOpacity onPress={() => onpress(item)}>
//     <View style={styles.listItem}>
//       <Text>{item.title}</Text>
//     </View>
//   </TouchableOpacity>
// );

// const Home = () => {
//   const [selectItem,setSelectItem] = useState([]);
//   const [modalVisible,setModalVisible] = useState(false);

//   const Data = [
//     { id: "1", title: "Islamic Content", details: "Details for Item 1" },
//     { id: "2", title: "Arabic Content", details: "Details for Item 2" },
//     { id: "3", title: "Quran And Hadith", details: "Details for Item 3" },
//   ];

//   const handleItemPress = (item) =>{
//     setSelectItem(item);
//     setModalVisible(true);
//   }

//   const closeModal = () =>{
//     setModalVisible(false);
//   };


//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={Data}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <ListItem item={item} onpress={handleItemPress} />}
//       />
//       <DetailsModal visible={modalVisible} item={selectItem} onclose={console.log('close')} />
//     </View>
//   );
// };

// const DetailsModal = ({visible,item,onclose}) =>(
//   <Modal visible={visible} animationType="slide">
//     <View style={styles.modalContainer}>
//       <Text style={styles.modalTitle}>{item.title}</Text>
//       <Text>{item.details}</Text>
//       <TouchableOpacity onpress={onclose} style={styles.closeBtn}>
//         <Text style={styles.closeBtnText}>Close</Text>
//       </TouchableOpacity>
//     </View>
//   </Modal>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   listItem: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   closeBtn: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#333',
//     borderRadius: 8,
//   },
//   closeBtnText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default Home;
