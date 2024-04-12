import 'package:flutter/material.dart';

const Color blueButton = Color(0xFF801ae6);
const Color blueText = Color(0xFFa21ae6);

const Color grayText = Color(0xFF5D5F65);
const Color whiteText = Color(0xFFEDEEEF);

const Color white = Color(0xFFFFFFFF);
const Color black = Color(0xFF000000);

const Color blackBG = Color(0xFF181A20);
const Color blackTextFild = Color(0xFF262A34);

const List<Color> gradient = [
  Color.fromRGBO(24, 26, 32, 1),
  Color.fromRGBO(24, 26, 32, 0.9),
  Color.fromRGBO(24, 26, 32, 0.8),
  Color.fromRGBO(24, 26, 32, 0.7),
  Color.fromRGBO(24, 26, 32, 0.6),
  Color.fromRGBO(24, 26, 32, 0.5),
  Color.fromRGBO(24, 26, 32, 0.4),
  Color.fromRGBO(24, 26, 32, 0.0),
];


Color mC = Colors.grey.shade100;
Color mCL = Colors.white;
Color mCD = Colors.black.withOpacity(0.075);
Color mCC = Colors.green.withOpacity(0.65);
Color fCL = Colors.grey.shade600;

BoxDecoration nMbox = BoxDecoration(
    shape: BoxShape.circle,
    color: mC,
    boxShadow: [
      BoxShadow(
        color: mCD,
        offset: const Offset(10, 10),
        blurRadius: 10,
      ),
      BoxShadow(
        color: mCL,
        offset: const Offset(-10, -10),
        blurRadius: 10,
      ),
    ]
);

BoxDecoration nMboxInvert = BoxDecoration(
    borderRadius: BorderRadius.circular(15),
    color: mCD,
    boxShadow: [
      BoxShadow(
          color: mCL,
          offset: const Offset(3, 3),
          blurRadius: 3,
          spreadRadius: -3
      ),
    ]
);
