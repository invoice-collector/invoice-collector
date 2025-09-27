
import { SketchCollector } from '../../sketchCollector';

export class CkEditorCollector extends SketchCollector {

    static CONFIG = {
        id: "ck_editor",
        name: "CK Editor",
        description: "i18n.collectors.ck_editor.description",
        version: "0",
        website: "https://dashboard.ckeditor.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1378851.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://dashboard.ckeditor.com/",
    }

    constructor() {
        super(CkEditorCollector.CONFIG);
    }
}
