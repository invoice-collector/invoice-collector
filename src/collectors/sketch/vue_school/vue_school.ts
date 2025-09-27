
import { SketchCollector } from '../../sketchCollector';

export class VueSchoolCollector extends SketchCollector {

    static CONFIG = {
        id: "vue_school",
        name: "Vue School",
        description: "i18n.collectors.vue_school.description",
        version: "0",
        website: "https://vueschool.io/profile/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776452.jpg",
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
        entryUrl: "https://vueschool.io/profile/invoices",
    }

    constructor() {
        super(VueSchoolCollector.CONFIG);
    }
}
