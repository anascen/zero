import 'package:apps/screens/splash.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const ZeroApp());
}

class ZeroApp extends StatelessWidget {
  const ZeroApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Zero App",
      theme: ThemeData.dark(),
      home: const SplashScreen(),
    );
  }
}
