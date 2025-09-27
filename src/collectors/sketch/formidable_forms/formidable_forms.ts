
import { SketchCollector } from '../../sketchCollector';

export class FormidableFormsCollector extends SketchCollector {

    static CONFIG = {
        id: "formidable_forms",
        name: "Formidable FORMS",
        description: "i18n.collectors.formidable_forms.description",
        version: "0",
        website: "https://formidableforms.com/account/purchases/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/787612.jpg",
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
        entryUrl: "https://formidableforms.com/account/purchases/",
    }

    constructor() {
        super(FormidableFormsCollector.CONFIG);
    }
}
