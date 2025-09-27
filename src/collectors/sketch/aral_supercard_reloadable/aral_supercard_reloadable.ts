
import { SketchCollector } from '../../sketchCollector';

export class AralSupercardReloadableCollector extends SketchCollector {

    static CONFIG = {
        id: "aral_supercard_reloadable",
        name: "Aral Supercard Reloadable",
        description: "i18n.collectors.aral_supercard_reloadable.description",
        version: "0",
        website: "https://reload.aral-supercard.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153511.jpg",
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
        entryUrl: "https://reload.aral-supercard.de/login",
    }

    constructor() {
        super(AralSupercardReloadableCollector.CONFIG);
    }
}
