#include<stdio.h>

int main() {

	int a = 0;
	int b = 0;
	int z = 0;
	char c;

	printf("숫자 연산자 숫자 순서대로 입력해주세요\n");
	scanf("%d %c %d", &a, &c, &b);

	if (c == '+') {
		z = a + b; // 양해미
	}
	else if (c == '-') {
		z = a - c; // 오재식
	}
	else if (c == '*') {
      		z = a * c; // 윤예성
	}
	else if (c == '/') {
		z = a / c; //장지혜

	}
	else {
		printf("연산자가 잘못되었습니다.");
		return 0;
	}
	printf("%d %c %d = %d",a, c, b, z);

}
