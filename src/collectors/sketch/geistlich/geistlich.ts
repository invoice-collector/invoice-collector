
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GeistlichCollector extends SketchCollector {

    static CONFIG = {
        id: "geistlich",
        name: "Geistlich",
        description: "i18n.collectors.geistlich.description",
        version: "0",
        website: "https://shop.geistlich.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4385297.jpg",
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
        entryUrl: "https://shop.geistlich.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GeistlichCollector.CONFIG);
    }
}
