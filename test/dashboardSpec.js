define(['viewModels/dashboard'], function (DashBoardViewModel) {

    describe('The dashboard page', function () {
        describe('The addNumbers function', function () {

            it('should add two numbers', function () {
                expect(DashBoardViewModel.addNumbers(1, 2)).toBe(3);
                expect(DashBoardViewModel.addNumbers(1.5, 1.1)).toBe(2.6);
                expect(DashBoardViewModel.addNumbers('1', '2')).toBe(3);
            })

        });
        describe('The answer function', function () {

            it('should return the correct answer', function () {
                DashBoardViewModel.firstNumber(1);
                DashBoardViewModel.secondNumber(2);
                expect(DashBoardViewModel.answer()).toBe(300);
                //trigger with new firstNumber
                DashBoardViewModel.firstNumber('10');
                expect(DashBoardViewModel.answer()).toBe(1200);
                //trigger
                DashBoardViewModel.secondNumber('20');
                expect(DashBoardViewModel.answer()).toBe(3000);
            });
        });
    });
});