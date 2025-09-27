
import { SketchCollector } from '../../sketchCollector';

export class HenryScheinMedicalGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "henry_schein_medical_gmbh",
        name: "Henry Schein Medical GmbH",
        description: "i18n.collectors.henry_schein_medical_gmbh.description",
        version: "0",
        website: "https://henryschein-med.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153501.jpg",
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
        entryUrl: "https://henryschein-med.de",
    }

    constructor() {
        super(HenryScheinMedicalGmbhCollector.CONFIG);
    }
}
