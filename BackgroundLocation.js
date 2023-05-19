// import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';

// const BackgroundLocation = () => {
//   const startBackgroundGeolocation = () => {
//     BackgroundGeolocation.configure({
//       desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
//       stationaryRadius: 50,
//       distanceFilter: 50,
//       notificationTitle: 'Background tracking',
//       notificationText: 'enabled',
//       debug: false,
//       startOnBoot: false,
//       stopOnTerminate: true,
//       locationProvider: BackgroundGeolocation.DISTANCE_FILTER_PROVIDER,
//       interval: 60000, // 5 minutes (in milliseconds)
//       fastestInterval: 5000, // 5 minutes (in milliseconds)
//       activitiesInterval: 10000, // 5 minutes (in milliseconds)
//       stopOnStillActivity: false,
//     });

//     BackgroundGeolocation.on('location', onLocation);
//     BackgroundGeolocation.on('error', onError);

//     BackgroundGeolocation.start();
//   };

//   const stopBackgroundGeolocation = () => {
//     BackgroundGeolocation.stop();
//     BackgroundGeolocation.removeAllListeners();
//   };

//   const onLocation = async(location) => {
//     // Send the location data to your server
//     // Implement your server communication logic here

//       console.log('Location:', location);
//   };

//   const onError = (error) => {
//     console.warn('BackgroundGeolocation error:', error);
//   };

//   return {
//     startBackgroundGeolocation,
//     stopBackgroundGeolocation,
//   };
// };

// export default BackgroundLocation;

// import React, { useEffect } from 'react';
// import BackgroundGeolocation from 'react-native-background-geolocation';
// import BackgroundFetch from 'react-native-background-fetch';

// const BackgroundLocation = () => {
//   useEffect(() => {
//     // Configure BackgroundGeolocation
//     BackgroundGeolocation.configure({
//       desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
//       stationaryRadius: 50,
//       distanceFilter: 50,
//       notificationTitle: 'Background Location',
//       notificationText: 'Enabled',
//       debug: false,
//       startOnBoot: false,
//       stopOnTerminate: true,
//       locationProvider: BackgroundGeolocation.DISTANCE_FILTER_PROVIDER,
//       interval: 60000, // 1 minute (in milliseconds)
//       fastestInterval: 30000, // 30 seconds (in milliseconds)
//       activitiesInterval: 60000, // 1 minute (in milliseconds)
//     });

//     // Start BackgroundGeolocation
//     BackgroundGeolocation.start();

//     // Register BackgroundFetch event
//     BackgroundFetch.configure(
//       {
//         minimumFetchInterval: 1, // 1 minute (in minutes)
//       },
//       async (taskId) => {
//         // Perform your location update logic here
//         const location = await BackgroundGeolocation.getCurrentLocation({
//           timeout: 5000, // 5 seconds (in milliseconds)
//           maximumAge: 10000, // 10 seconds (in milliseconds)
//         });

//         try {
//             const response = await fetch("http://192.168.29.123:3000/", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({location:location}),
//             });
//           } catch (error) {
//             console.error(error);
//           }
//         console.log('Location:', location);

//         // Call BackgroundFetch finish method
//         BackgroundFetch.finish(taskId);
//       },
//       (error) => {
//         console.error('BackgroundFetch error:', error);
//       }
//     );

//     // Subscribe to BackgroundGeolocation events
//     BackgroundGeolocation.on('start', () => {
//       console.log('[BackgroundGeolocation] started');
//     });

//     BackgroundGeolocation.on('stop', () => {
//       console.log('[BackgroundGeolocation] stopped');
//     });

//     BackgroundGeolocation.on('error', (error) => {
//       console.error('[BackgroundGeolocation] error:', error);
//     });

//     // Clean up on component unmount
//     return () => {
//       BackgroundGeolocation.stop();
//       BackgroundFetch.unregisterTask();
//     };
//   }, []);

//   return null;
// };

// export default BackgroundLocation;

