import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';


describe('ConfirmationDialogComponent', () => {

    it('handleAccept should call onAccept and onClose functions', () => {
      const onAcceptMock = jest.fn();
      const onCloseMock = jest.fn();
      const title = 'Confirmation Dialog';
      const labels = {
        closeButton: 'Close',
        acceptButton: 'Accept',
      };
    
      const { getByText } = render(
        <ConfirmationDialogComponent
          isOpen={true}
          onAccept={onAcceptMock}
          onClose={onCloseMock}
          title={title}
          labels={labels}
        >
          <div>Children</div>
        </ConfirmationDialogComponent>
      );

      const acceptButton = getByText(labels.acceptButton);
      fireEvent.click(acceptButton);

      expect(onAcceptMock).toHaveBeenCalledTimes(1);
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  
     it('onClose should call only onClose functions', () => {
       const onAcceptMock = jest.fn();
       const onCloseMock = jest.fn();
       const title = 'Confirmation Dialog';
       const labels = {
         closeButton: 'Close',
         acceptButton: 'Accept',
       };

       const { getByText } = render(
         <ConfirmationDialogComponent
           isOpen={true}
           onAccept={onAcceptMock}
           onClose={onCloseMock}
           title={title}
           labels={labels}
         >
           <div>Children</div>
         </ConfirmationDialogComponent>
       );

       const acceptButton = getByText(labels.closeButton);
       fireEvent.click(acceptButton);

       expect(onCloseMock).toHaveBeenCalledTimes(1);
     });
     
});
