
import { SketchCollector } from '../../sketchCollector';

export class Parcel2goCollector extends SketchCollector {

    static CONFIG = {
        id: "parcel2go",
        name: "Parcel2GO",
        description: "i18n.collectors.parcel2go.description",
        version: "0",
        website: "https://www.parcel2go.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71145.jpg",
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
        entryUrl: "https://www.parcel2go.com/login",
    }

    constructor() {
        super(Parcel2goCollector.CONFIG);
    }
}
