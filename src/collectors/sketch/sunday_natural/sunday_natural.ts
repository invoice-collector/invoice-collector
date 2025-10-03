
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SundayNaturalCollector extends SketchCollector {

    static CONFIG = {
        id: "sunday_natural",
        name: "Sunday Natural",
        description: "i18n.collectors.sunday_natural.description",
        version: "0",
        website: "https://www.sunday.de/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/388064.jpg",
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
        entryUrl: "https://www.sunday.de/sales/order/history/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SundayNaturalCollector.CONFIG);
    }
}
