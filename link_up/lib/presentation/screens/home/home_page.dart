import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:nfc_manager/nfc_manager.dart';

import '../../themes/colors.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  ValueNotifier<dynamic> result = ValueNotifier(null);

  void _startNFCReading() async {
    try {
      bool isAvailable = await NfcManager.instance.isAvailable();

      //We first check if NFC is available on the device.
      if (isAvailable) {
        //If NFC is available, start an NFC session and listen for NFC tags to be discovered.
        NfcManager.instance.startSession(
          onDiscovered: (NfcTag tag) async {
            // Process NFC tag, When an NFC tag is discovered, print its data to the console.
            debugPrint('NFC Tag Detected: ${tag.data}');
          },
        );
      } else {
        debugPrint('NFC not available.');
      }
    } catch (e) {
      debugPrint('Error reading NFC: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: mC,
      body: Stack(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.only(left: 25, right: 25, top: 100),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                const Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    NMButton(icon: Icons.arrow_back),
                    NMButton(icon: Icons.menu),
                  ],
                ),
                AvatarImage(),
                const SizedBox(height: 15),
                const Text(
                  'Steven Dz',
                  style: TextStyle(fontSize: 30, fontWeight: FontWeight.w700),
                ),
                const Text(
                  'Amsterdam',
                  style: TextStyle(fontWeight: FontWeight.w200),
                ),
                const SizedBox(height: 15),
                const Text(
                  'Mobile App Developer and Game Designer',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 20),
                ),
                const SizedBox(height: 35),
                const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    NMButton(icon: FontAwesomeIcons.facebookF),
                    SizedBox(width: 25),
                    NMButton(icon: FontAwesomeIcons.twitter),
                    SizedBox(width: 25),
                    NMButton(icon: FontAwesomeIcons.instagram),
                  ],
                ),
                const SizedBox(height: 35),
                const Row(
                  children: <Widget>[
                    SocialBox(
                        icon: FontAwesomeIcons.dribbble,
                        count: '35',
                        category: 'shots'),
                    SizedBox(width: 15),
                    SocialBox(
                        icon: FontAwesomeIcons.userAlt,
                        count: '1.2k',
                        category: 'followers'),
                  ],
                ),
                const SizedBox(height: 20),
                const Row(
                  children: <Widget>[
                    SocialBox(
                        icon: FontAwesomeIcons.heart,
                        count: '5.1k',
                        category: 'likes'),
                    SizedBox(width: 15),
                    SocialBox(
                        icon: FontAwesomeIcons.user,
                        count: '485',
                        category: 'following'),
                  ],
                ),
                const SizedBox(height: 35),
              ],
            ),
          ),
          DraggableScrollableSheet(
            initialChildSize: 0.07,
            minChildSize: 0.07,
            maxChildSize: 0.4,
            builder: (BuildContext context, scroll) {
              return Container(
                decoration: nMbox,
                child: ListView(
                  controller: scroll,
                  children: <Widget>[
                    Center(
                      child: Column(
                        children: <Widget>[
                          Padding(
                            padding: const EdgeInsets.only(bottom: 5),
                            child: Icon(Icons.share, color: fCL),
                          ),
                          const Text(
                            'Share',
                            style: TextStyle(
                                fontSize: 28, fontWeight: FontWeight.w700),
                          ),
                          const SizedBox(height: 15),
                          const Text(
                            'Share your profile with friends',
                            textAlign: TextAlign.center,
                          ),
                          const SizedBox(height: 35),
                          Container(
                            width: 225,
                            padding: const EdgeInsets.all(10),
                            decoration: nMboxInvert,
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                              children: <Widget>[
                                IconButton(
                                  icon: Icon(FontAwesomeIcons.twitter,
                                      color: fCL),
                                  onPressed: () {
                                    _startNFCReading();
                                  },
                                ),
                                IconButton(
                                  icon: Icon(FontAwesomeIcons.instagram,
                                      color: fCL),
                                  onPressed: () {
                                    _startNFCReading();
                                  },
                                ),
                                IconButton(
                                  icon: Icon(FontAwesomeIcons.whatsapp,
                                      color: fCL),
                                  onPressed: () {
                                    _startNFCReading();
                                  },
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 25),
                          FaIcon(
                            FontAwesomeIcons.copy,
                            color: Colors.pink.shade800,
                          ),
                          const Text(
                            'Copy link',
                          ),
                        ],
                      ),
                    )
                  ],
                ),
              );
            },
          )
        ],
      ),
    );
  }
}

class SocialBox extends StatelessWidget {
  final IconData icon;
  final String count;
  final String category;

  const SocialBox(
      {required this.icon, required this.count, required this.category});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        padding: const EdgeInsets.all(15),
        decoration: nMboxInvert,
        child: Row(
          children: <Widget>[
            FaIcon(icon, color: Colors.pink.shade800, size: 20),
            const SizedBox(width: 8),
            Text(
              count,
              style: const TextStyle(fontWeight: FontWeight.w700),
            ),
            const SizedBox(width: 3),
            Text(
              category,
            ),
          ],
        ),
      ),
    );
  }
}

class NMButton extends StatelessWidget {
  final IconData icon;

  const NMButton({super.key, required this.icon});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 55,
      height: 55,
      decoration: nMbox,
      child: Icon(
        icon,
        color: fCL,
      ),
    );
  }
}

class AvatarImage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 150,
      height: 150,
      padding: const EdgeInsets.all(8),
      decoration: nMbox,
      child: Container(
        decoration: nMbox,
        padding: const EdgeInsets.all(3),
        child: Container(
          decoration: const BoxDecoration(
            shape: BoxShape.circle,
            image: DecorationImage(
              image: AssetImage('assets/image/avatar.jpg'),
            ),
          ),
        ),
      ),
    );
  }
}
