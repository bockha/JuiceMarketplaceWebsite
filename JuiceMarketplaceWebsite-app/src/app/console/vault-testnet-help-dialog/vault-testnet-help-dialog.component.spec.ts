import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultTestnetHelpDialogComponent } from './vault-testnet-help-dialog.component';

describe('VaultTestnetHelpDialogComponent', () => {
  let component: VaultTestnetHelpDialogComponent;
  let fixture: ComponentFixture<VaultTestnetHelpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultTestnetHelpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultTestnetHelpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
