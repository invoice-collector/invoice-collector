
import { SketchCollector } from '../../sketchCollector';

export class ThePieSlicerCollector extends SketchCollector {

    static CONFIG = {
        id: "the_pie_slicer",
        name: "The Pie Slicer",
        description: "i18n.collectors.the_pie_slicer.description",
        version: "0",
        website: "https://thepieslicer.com/settings#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131267.jpg",
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
        entryUrl: "https://thepieslicer.com/settings#invoices",
    }

    constructor() {
        super(ThePieSlicerCollector.CONFIG);
    }
}
