### 3 steps to create a simple **Helloworld** react-native for Android

Write code to **index.android.js** file.

  * **Step 1**: Import all nessesary libraries.

    ```js
    import React, { Component } from 'react';
    import {
      AppRegistry, View, Text
    } from 'react-native';
    ```

  * **Step 2**: Write code for classes {Components}

    ```js
    class Helloworld extends Component {
      render(){
        return(
          <View>
            <Text>
              Hello React Native Android!
            </Text>
          </View>
        );
      }
    }
    ```

  * **Step 3**: Register for main class.

    ```
    AppRegistry.registerComponent('Helloworld', () => Helloworld);
    ```
