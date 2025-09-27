
import { SketchCollector } from '../../sketchCollector';

export class ArtgridCollector extends SketchCollector {

    static CONFIG = {
        id: "artgrid",
        name: "Artgrid",
        description: "i18n.collectors.artgrid.description",
        version: "0",
        website: "https://artgrid.io/my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/759118.jpg",
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
        entryUrl: "https://artgrid.io/my-account",
    }

    constructor() {
        super(ArtgridCollector.CONFIG);
    }
}
