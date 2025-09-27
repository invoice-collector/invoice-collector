
import { SketchCollector } from '../../sketchCollector';

export class HenryScheinAuCollector extends SketchCollector {

    static CONFIG = {
        id: "henry_schein_au",
        name: "Henry Schein AU",
        description: "i18n.collectors.henry_schein_au.description",
        version: "0",
        website: "https://henryschein.com.au/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/399635.jpg",
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
        entryUrl: "https://henryschein.com.au/",
    }

    constructor() {
        super(HenryScheinAuCollector.CONFIG);
    }
}
