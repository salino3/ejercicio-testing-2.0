
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';
import { act, renderHook } from '@testing-library/react';

describe('useConfirmationDialog', () => {
  it('onAccept should reset itemToDelete', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const item: Lookup = { id: '1', name: 'Item 1' };


    act(() => {
      result.current.onOpenDialog(item);
    }); 
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(item);


    act(() => {
      result.current.onAccept();
    });
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

 it('onClose should set isOpen to false', () => {
  const { result } = renderHook(() => useConfirmationDialog());
  const item: Lookup = { id: '1', name: 'Item 1' };

  act(() => {
    result.current.onOpenDialog(item);
  });
  expect(result.current.isOpen).toBe(true);

  act(() => {
    result.current.onClose();
  });
  expect(result.current.isOpen).toBe(false);
  expect(result.current.itemToDelete).toEqual(item);
});


});
