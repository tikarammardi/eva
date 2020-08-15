/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: "0.0.0.0", // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out or empty, is "localhost"
  port: 8080,
  ipWhitelist: [
    "127.0.0.1",
    "::ffff:127.0.0.1",
    "::1",
    "::ffff:192.168.1.120",
    "::fff:192.168.1.1/112",
    "0.0.0.0/0"
  ], // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  useHttps: false, // Support HTTPS or not, default "false" will use HTTP
  httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
  httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

  language: "en",
  timeFormat: 24,
  units: "metric",
  // serverOnly:  true/false/"local" ,
  // local for armv6l processors, default
  //   starts serveronly and then starts chrome browser
  // false, default for all  NON-armv6l devices
  // true, force serveronly mode, because you want to.. no UI on this device

  modules: [
    {
      module: "alert"
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "calendar",
      // header: "Vaibhav Events",
      position: "bottom_right",
      config: {
        calendars: [
          {
            symbol: "calendar-check",
            url:
              "https://calendar.google.com/calendar/ical/vaibhavbajpai12%40gmail.com/private-704775c0e4f92b327bd70e76bc7aef7d/basic.ics"
          }
          // url:
          // "https://calendar.google.com/calendar/ical/tikarammardi007%40gmail.com/private-bf02f30b08af4e2b38688561526fe5a6/basic.ics"
      
        ]
      }
    },
    {
      module: "MMM-NowPlayingOnSpotify",
      position: "top_left",
    
      config: {
        clientID: "08ca04b3542a486e9bdc3d7ac011f38f",
        clientSecret: "4cfc7003e0bb48e3afeb067d41d033ef",
        accessToken: "BQC3dABJElgYTQoMydcwE_DH00OESVNiLpOIuufSWlb41f3DuJeAAfFzEj4LpAL4nGnnZ7A337V1c69TlDVu9B3iNo7bP83G4fcql9rF-pcyL8FjTWkm56as1IcZ3Zn_OEwzTnPE2jza4LPJ-WtyQDgIIUa_6HTRyLJ1fpbW0Q",
        refreshToken: "AQDHMZSws6tkxJlDKPKnyBY56_IWXwKUVYWpY7XDT-1dnSqdrPOvieIrLyRqB0SnQXYPHY7pjfDl_Q4kQPI_eil2Cv5WmVe9uB_rv2I0R836iaDJi6dFIWQs75NfMYWbe1U"
      }
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "Bengaluru",
        locationID: "1277333", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        appid: "47a4ddfebd4db59c2fcbd0969533fa56"
      }
    },
    {
      module: "MMM-COVID19",
      position: "center",
      config: {
        header: "",
        updateInterval: 300000,
        worldStats: true,
        delta: true,
        lastUpdateInfo: true,
        highlightCountry: "India",
        countries: ["India", "USA", "Italy", "China"],
        headerRowClass: "medium",
        rapidapiKey: "02ce160ac6msh84b06a71670eaffp1f91d4jsn4daad31c3da4" // this is an example, do not try to use it for real
      }
    },
    {
      module: "MMM-Remote-Control",
      // position: 'bottom_left',
      config: {
        customCommand: {}, // Optional, See "Using Custom Commands" below
        customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
        showModuleApiMenu: true, // Optional, Enable the Module Controls menu
        apiKey: "" // Optional, See API/README.md for details
      }
    },

    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "Times of India",
            url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
      }
    },
    {
      module: "MMM-SmartTouch",
      position: "bottom_center", // This can be any of the regions.(bottom-center Recommended)
      config: {
        // The config property is optional.
      }
    },
    {
      module: "MMM-AirQuality",
      position: "top_center",
      config: {
        location: "india/bangalore/peenya",
        showLocation: true
      }
    },
    {
      module: "MMM-Mail",
      position: "bottom_left",
      header: "Email",
      config: {
        // user: "tikarammardi007@gmail.com",
		    // pass: "",
		
		    user: "vaibhav.beis.16@acharya.ac.in",
        pass: "prosnewit@98v",
        host: "imap.gmail.com",
        port: 993,
        numberOfEmails: 3,
        fade: false,
        subjectlength: 50
      }
    }
  ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
