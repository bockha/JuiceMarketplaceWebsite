import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultPayoutDialogComponent } from './vault-payout-dialog.component';

describe('VaultPayoutDialogComponent', () => {
  let component: VaultPayoutDialogComponent;
  let fixture: ComponentFixture<VaultPayoutDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultPayoutDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultPayoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
