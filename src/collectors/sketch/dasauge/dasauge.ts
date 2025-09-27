
import { SketchCollector } from '../../sketchCollector';

export class DasaugeCollector extends SketchCollector {

    static CONFIG = {
        id: "dasauge",
        name: "dasauge",
        description: "i18n.collectors.dasauge.description",
        version: "0",
        website: "https://dasauge.de/mitglieder/rechnungen/?utm_source=erinnerung&utm_medium=email",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1284041.jpg",
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
        entryUrl: "https://dasauge.de/mitglieder/rechnungen/?utm_source=erinnerung&utm_medium=email",
    }

    constructor() {
        super(DasaugeCollector.CONFIG);
    }
}
