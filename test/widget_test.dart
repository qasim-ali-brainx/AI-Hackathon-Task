import 'package:flutter_test/flutter_test.dart';

import 'package:hackathon_task/main.dart';

void main() {
  testWidgets('App loads', (WidgetTester tester) async {
    await tester.pumpWidget(const HackathonApp());

    expect(find.text('Hackathon Task'), findsOneWidget);
    expect(find.text('Ready to build.'), findsOneWidget);
  });
}
