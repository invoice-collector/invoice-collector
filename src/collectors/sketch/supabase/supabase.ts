
import { SketchCollector } from '../../sketchCollector';

export class SupabaseCollector extends SketchCollector {

    static CONFIG = {
        id: "supabase",
        name: "Supabase",
        description: "i18n.collectors.supabase.description",
        version: "0",
        website: "https://supabase.com/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4426743.jpg",
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
        entryUrl: "https://supabase.com/dashboard",
    }

    constructor() {
        super(SupabaseCollector.CONFIG);
    }
}
