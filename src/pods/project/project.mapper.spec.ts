import {
  mapEmployeeSummaryListFromApiToVm,
  mapProjectFromApiToVm,
} from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('project.mapper.spec.ts', () => {
  it('should map employeeSummary list from apiModel to viewModel', () => {
    // Arrange
    const employeeSummaryApi: apiModel.EmployeeSummary[] = [
      { id: '1', employeeName: 'Carlos Torres', isAssigned: true },
      { id: '2', employeeName: 'Ana Lara', isAssigned: false },
    ];
    const expectedEmployeeSummaryVm: viewModel.EmployeeSummary[] = [
      { id: '1', employeeName: 'Carlos Torres', isAssigned: true },
      { id: '2', employeeName: 'Ana Lara', isAssigned: false },
    ];

    // Act
    const mappedEmployeeSummaryVm =
      mapEmployeeSummaryListFromApiToVm(employeeSummaryApi);

    // Assert
    expect(mappedEmployeeSummaryVm).toEqual(expectedEmployeeSummaryVm);
  });

  it('should map EmployeeSummary list from apiModel to viewModel', () => {
    // Arrange
    const employeeSummaryList = [
      {
        id: '1',
        isAssigned: true,
        employeeName: 'Joe Rossini',
      },
      {
        id: '2',
        isAssigned: false,
        employeeName: 'María Gonzales',
      },
    ];

    // Act
    const result = mapEmployeeSummaryListFromApiToVm(employeeSummaryList);

    // Assert
    expect(result).toEqual([
      {
        id: '1',
        isAssigned: true,
        employeeName: 'Joe Rossini',
      },
      {
        id: '2',
        isAssigned: false,
        employeeName: 'María Gonzales',
      },
    ]);
  });

  
  it('should map mapProjectFromApiToVm  list from apiModel to viewModel', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'Project 1',
      externalId: '12345',
      comments: 'This is a test',
      isActive: true,
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Mario Torres',
        },
        {
          id: '2',
          isAssigned: false,
          employeeName: 'Jack Smith',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({
      id: '1',
      name: 'Project 1',
      externalId: '12345',
      comments: 'This is a test',
      isActive: true,
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Mario Torres',
        },
        {
          id: '2',
          isAssigned: false,
          employeeName: 'Jack Smith',
        },
      ],
    });
  });
});
