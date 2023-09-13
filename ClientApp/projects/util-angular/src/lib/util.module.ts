//================ util模块 ======================
//Copyright 2023 何镇汐
//Licensed under the MIT license
//================================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableExtendDirective } from "./zorro/table.extend.directive";
import { EditTableDirective } from "./zorro/edit-table.directive";
import { EditRowDirective } from "./zorro/edit-row.directive";
import { EditControlDirective } from "./zorro/edit-control.directive";
import { ButtonExtendDirective } from "./zorro/button.extend.directive";
import { ValidationExtendDirective } from "./zorro/validation.extend.directive";
import { SelectExtendDirective } from "./zorro/select.extend.directive";
import { TreeTableExtendDirective } from "./zorro/tree.table.extend.directive";
import { TreeExtendDirective } from "./zorro/tree.extend.directive";
import { TinymceExtendDirective } from "./tinymce/tinymce.extend.directive";
import { DrawerFooterComponent } from "./drawer/drawer-footer.component";
import { RequiredExtendDirective } from "./zorro/required.extend.directive";
import { UploadExtendDirective } from "./zorro/upload.extend.directive";
import { TenantInterceptor } from "./tenant/tenant.interceptor";
import { LanguageInterceptor } from "./language/language.interceptor";

/**
 * util模块
 */
@NgModule({
    declarations: [
        TableExtendDirective,
        EditTableDirective, EditRowDirective, EditControlDirective,
        RequiredExtendDirective,ButtonExtendDirective,
        ValidationExtendDirective, SelectExtendDirective,
        TreeTableExtendDirective, TreeExtendDirective,
        TinymceExtendDirective, DrawerFooterComponent,
        UploadExtendDirective
    ],
    imports: [
        CommonModule,FormsModule,NzButtonModule
    ],
    exports: [
        TableExtendDirective,
        EditTableDirective, EditRowDirective, EditControlDirective,
        RequiredExtendDirective,ButtonExtendDirective,
        ValidationExtendDirective, SelectExtendDirective,
        TreeTableExtendDirective, TreeExtendDirective,
        TinymceExtendDirective, UploadExtendDirective
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TenantInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true }
    ]
})
export class UtilModule {
}
