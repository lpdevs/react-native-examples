### React native examples

Learning and practicing react native framework for building android apps.

### Installing

  * [Getting started](https://facebook.github.io/react-native/docs/getting-started.html).

### Initialization react native project

Open cmd with **Run as Administrator**

  * **Step 1**: Init project
  
    ```
	react-native init projectname
	```
	
  * **Step 2**: Open project in Android
    
	* Having an Android emulator running or a device connected)
  
    ```
	cd projectname
	react-native run-android
	```

  * **Step 3**: Init nodejs server
  
    ```
	react-native start
	```

### Common Errors

  * app:compileDebugJavaWithJavac FAILED : you need to set **JAVA_HOME** environment variable, such as: **C:\Program Files\Java\jdk1.7.0_79**. Then set path **%JAVA_HOME%\lib** for **tools.jar**
  * Unable to get the result of **adb version**: set path for **adb tools**. For me, it is inside in  **C:\Users\LamPV\AppData\Local\Android\sdk\platform-tools**
  * Error with Genymotion cause a problem **no device connected**: Open Genymotion -> Settings -> ADB -> choose **Use custom Android SDK tools** then browse to the path of Android SDK, such as: **C:/Users/LamPV/AppData/Local/Android/sdk**
  



