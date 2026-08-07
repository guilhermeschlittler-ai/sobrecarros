import { useState, useRef } from 'react';
import {
  ImageSourcePropType,
  View,
  StyleSheet,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

import { captureRef } from 'react-native-view-shot';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from '@/components/EmojiList';
import EmojiSticker from '@/components/EmojiSticker';

const PlaceholderImage = require('@/assets/images/5821958.png');

export default function Index() {
  const imageRef = useRef<View>(null);

  const [status, requestPermission] = MediaLibrary.usePermissions();

  const [selectedImage, setSelectedImage] = useState<
    string | undefined
  >(undefined);

  const [showAppOptions, setShowAppOptions] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);

  // Escolher uma imagem da galeria
  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  // Resetar a imagem
  const onReset = () => {
    setShowAppOptions(false);
    setSelectedImage(undefined);
    setPickedEmoji(undefined);
  };

  // Abrir o seletor de emojis
  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  // Fechar o seletor de emojis
  const onModalClose = () => {
    setIsModalVisible(false);
  };

  // Salvar a imagem
  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);

      if (localUri) {
        alert('Saved!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Solicitar permissão para acessar a galeria
  if (status === null) {
    requestPermission();
  }

  return (
    <GestureHandlerRootView style={styles.container}>

      {/* Área da imagem */}
      <View
        ref={imageRef}
        collapsable={false}
        style={styles.imageContainer}
      >
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />

        {/* Emoji selecionado */}
        {pickedEmoji && (
          <EmojiSticker
            imageSize={40}
            stickerSource={pickedEmoji}
          />
        )}
      </View>

      {/* Opções depois de escolher uma foto */}
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>

            <IconButton
              icon="refresh"
              label="Reset"
              onPress={onReset}
            />

            <CircleButton onPress={onAddSticker} />

            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />

          </View>
        </View>
      ) : (
        /* Botões iniciais */
        <View style={styles.footerContainer}>

          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />

          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />

        </View>
      )}

      {/* Seletor de emojis */}
      <EmojiPicker
        isVisible={isModalVisible}
        onClose={onModalClose}
      >
        <EmojiList
          onSelect={setPickedEmoji}
          onCloseModal={onModalClose}
        />
      </EmojiPicker>

    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },

  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});