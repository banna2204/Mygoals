import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph } from './graph';
import { TooltipItem } from 'chart.js';

describe('Graph', () => {
  let component: Graph;
  let fixture: ComponentFixture<Graph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Graph],
    }).compileComponents();

    fixture = TestBed.createComponent(Graph);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should chart defined', () => {
    expect(component.chart).toBeDefined()
  });

  it('should chart render data properties correctly', () => {
    expect(component.chart?.data.labels).toEqual(['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'])
    const dataset = component.chart?.data.datasets[0];
    expect(dataset?.data).toEqual([12, 19, 3, 5, 2, 3]);
    const value = dataset?.backgroundColor as Function;
    const mockContext = {
      dataIndex: 'a',
      dataset: {
        data:[]
      }
    };

    let resultValue = value(mockContext);
    expect(resultValue).toBe('blue');
  });

  it('should chart render plugin properties correctly', () => {
    const options = component.chart?.options;
    const tooltip = options?.plugins?.tooltip;

    expect(tooltip?.enabled).toBeTrue();

    const title = tooltip?.callbacks?.title as Function;
    const mockContext = [
      {label: 'tooltip-label'}
    ];

    const footer = tooltip?.callbacks?.footer as Function;
    const footerMockContext = [
      {
        dataIndex: 0,
        dataset: {
          data: [100, 2500, 300]
        }
      }
    ] as unknown as TooltipItem<'bar'>[];

    const afterBody = tooltip?.callbacks?.afterBody as Function;
    const afterBodyMockContext = [
      {
        dataIndex: 2,
        dataset: {
          data: [100, 2500, 300]
        }
      }
    ] as unknown as TooltipItem<'bar'>[];

    const resultTitle = title(mockContext);
    expect(resultTitle).toBe('tooltip-label');
    const resultFooter = footer(footerMockContext);
    expect(resultFooter).toBe('100');
    const afterBodyResult = afterBody(afterBodyMockContext);
    expect(afterBodyResult).toBe((300).toLocaleString());
    expect(options?.plugins?.legend?.labels?.font).toEqual({'size':5});
  })
});
