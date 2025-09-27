
import { SketchCollector } from '../../sketchCollector';

export class ReifenGundlachGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "reifen_gundlach_gmbh",
        name: "Reifen Gundlach GmbH",
        description: "i18n.collectors.reifen_gundlach_gmbh.description",
        version: "0",
        website: "https://shop.reifengundlach.de/Start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1183286.jpg",
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
        entryUrl: "https://shop.reifengundlach.de/Start",
    }

    constructor() {
        super(ReifenGundlachGmbhCollector.CONFIG);
    }
}
