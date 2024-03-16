import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Story = ({ route }) => {
  const { story } = route.params;
  const [showmore, setShowmore] = useState(false);

  const handleShowmore = () => {
    setShowmore(!showmore);
  };

  // console.log(story);
  return (
    <ScrollView>
      <View className="p-5">
        {/* <Text numberOfLines={showmore ? 0 : 6}>{story.des}</Text> */}
        {!showmore ? (
          <TouchableOpacity onPress={handleShowmore}>
            <Text numberOfLines={showmore ? 0 : 6}>{story.des}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleShowmore}>
            <Text numberOfLines={showmore ? 0 : 6}>{story.des}</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default Story;
