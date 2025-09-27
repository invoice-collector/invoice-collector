
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeHanauCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_hanau",
        name: "Stadtwerke Hanau",
        description: "i18n.collectors.stadtwerke_hanau.description",
        version: "0",
        website: "https://csc.stadtwerke-hanau.de/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/104671.jpg",
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
        entryUrl: "https://csc.stadtwerke-hanau.de/rechnungen",
    }

    constructor() {
        super(StadtwerkeHanauCollector.CONFIG);
    }
}
