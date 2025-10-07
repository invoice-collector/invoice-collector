
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MyalbumCollector extends SketchCollector {

    static CONFIG = {
        id: "myalbum",
        name: "MyAlbum",
        description: "i18n.collectors.myalbum.description",
        version: "0",
        website: "https://myalbum.com/member/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779841.jpg",
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
        entryUrl: "https://myalbum.com/member/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MyalbumCollector.CONFIG);
    }
}
