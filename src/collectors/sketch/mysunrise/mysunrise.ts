
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MysunriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mysunrise",
        name: "MySunrise",
        description: "i18n.collectors.mysunrise.description",
        version: "0",
        website: "https://www.sunrise.ch/content/mysunrise/de/residential/meine-rechnungen.html#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/446097.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.sunrise.ch/content/mysunrise/de/residential/meine-rechnungen.html#/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MysunriseCollector.CONFIG);
    }
}
