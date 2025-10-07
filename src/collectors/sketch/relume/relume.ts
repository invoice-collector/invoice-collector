
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RelumeCollector extends SketchCollector {

    static CONFIG = {
        id: "relume",
        name: "Relume",
        description: "i18n.collectors.relume.description",
        version: "0",
        website: "https://library.relume.io/dashboard#/ms/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1980330.jpg",
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
        entryUrl: "https://library.relume.io/dashboard#/ms/profile",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RelumeCollector.CONFIG);
    }
}
