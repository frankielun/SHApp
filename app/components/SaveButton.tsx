import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

interface IProps {
  isSaved: boolean;
  onSave: (() => void) | undefined;
  onUnSave: (() => void) | undefined;
}


const SaveButton = ({ isSaved, onSave, onUnSave } :IProps) => {
  
  return (
    <View>
        {isSaved && <Button icon="camera" onPress={onUnSave}>Un-Save</Button>}
        {!isSaved && <Button icon="camera" onPress={onSave}>Save</Button>}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SaveButton;
