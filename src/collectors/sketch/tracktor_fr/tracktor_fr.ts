
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TracktorFrCollector extends SketchCollector {

    static CONFIG = {
        id: "tracktor_fr",
        name: "Tracktor (.fr)",
        description: "i18n.collectors.tracktor_fr.description",
        version: "0",
        website: "https://tracktor.fr/users/2060-simon/bookings/14604#facturation",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/745731.jpg",
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
        entryUrl: "https://tracktor.fr/users/2060-simon/bookings/14604#facturation",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TracktorFrCollector.CONFIG);
    }
}
