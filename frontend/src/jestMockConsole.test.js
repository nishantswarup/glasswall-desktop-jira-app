import React from 'react';
import mockConsole from 'jest-mock-console';


it('test jest-mock-console', () => {
    const restoreConsole = mockConsole();
    console.error('This will not show in the test report');
    expect(console.error).toHaveBeenCalled();
    console.log(console.error.mock.calls)
    restoreConsole();
});
