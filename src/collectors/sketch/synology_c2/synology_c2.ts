
import { SketchCollector } from '../../sketchCollector';

export class SynologyC2Collector extends SketchCollector {

    static CONFIG = {
        id: "synology_c2",
        name: "Synology C2",
        description: "i18n.collectors.synology_c2.description",
        version: "0",
        website: "https://eu.c2.synology.com/de-de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/35259.jpg",
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
        entryUrl: "https://eu.c2.synology.com/de-de/login",
    }

    constructor() {
        super(SynologyC2Collector.CONFIG);
    }
}
