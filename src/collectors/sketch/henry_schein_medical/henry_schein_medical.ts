
import { SketchCollector } from '../../sketchCollector';

export class HenryScheinMedicalCollector extends SketchCollector {

    static CONFIG = {
        id: "henry_schein_medical",
        name: "Henry Schein Medical",
        description: "i18n.collectors.henry_schein_medical.description",
        version: "0",
        website: "https://www.henryschein.com/us-en/medical/default.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1098158.jpg",
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
        entryUrl: "https://www.henryschein.com/us-en/medical/default.aspx",
    }

    constructor() {
        super(HenryScheinMedicalCollector.CONFIG);
    }
}
