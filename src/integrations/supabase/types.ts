export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5";
  };
  public: {
    Tables: {
      advisors: {
        Row: {
          aum_target: number | null;
          brand_color: string | null;
          calendly_link: string | null;
          created_at: string;
          disclosure: string | null;
          firm_name: string;
          id: string;
          logo_url: string | null;
          min_assets: number | null;
          slug: string;
        };
        Insert: {
          aum_target?: number | null;
          brand_color?: string | null;
          calendly_link?: string | null;
          created_at?: string;
          disclosure?: string | null;
          firm_name: string;
          id?: string;
          logo_url?: string | null;
          min_assets?: number | null;
          slug: string;
        };
        Update: {
          aum_target?: number | null;
          brand_color?: string | null;
          calendly_link?: string | null;
          created_at?: string;
          disclosure?: string | null;
          firm_name?: string;
          id?: string;
          logo_url?: string | null;
          min_assets?: number | null;
          slug?: string;
        };
        Relationships: [];
      };
      audit_logs: {
        Row: {
          action: string;
          actor: string | null;
          advisor_id: string | null;
          details: Json | null;
          id: string;
          prospect_id: string | null;
          timestamp: string;
        };
        Insert: {
          action: string;
          actor?: string | null;
          advisor_id?: string | null;
          details?: Json | null;
          id?: string;
          prospect_id?: string | null;
          timestamp?: string;
        };
        Update: {
          action?: string;
          actor?: string | null;
          advisor_id?: string | null;
          details?: Json | null;
          id?: string;
          prospect_id?: string | null;
          timestamp?: string;
        };
        Relationships: [
          {
            foreignKeyName: "audit_logs_advisor_id_fkey";
            columns: ["advisor_id"];
            isOneToOne: false;
            referencedRelation: "advisors";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "audit_logs_prospect_id_fkey";
            columns: ["prospect_id"];
            isOneToOne: false;
            referencedRelation: "prospects";
            referencedColumns: ["id"];
          },
        ];
      };
      documents: {
        Row: {
          file_name: string;
          file_url: string | null;
          id: string;
          prospect_id: string;
          type: string | null;
          upload_date: string;
        };
        Insert: {
          file_name: string;
          file_url?: string | null;
          id?: string;
          prospect_id: string;
          type?: string | null;
          upload_date?: string;
        };
        Update: {
          file_name?: string;
          file_url?: string | null;
          id?: string;
          prospect_id?: string;
          type?: string | null;
          upload_date?: string;
        };
        Relationships: [
          {
            foreignKeyName: "documents_prospect_id_fkey";
            columns: ["prospect_id"];
            isOneToOne: false;
            referencedRelation: "prospects";
            referencedColumns: ["id"];
          },
        ];
      };
      meetings: {
        Row: {
          action_items: Json | null;
          advisor_id: string | null;
          ai_summary: string | null;
          compliance_flags: Json | null;
          created_at: string;
          fiduciary_notes: string | null;
          id: string;
          prospect_id: string | null;
          transcript_text: string | null;
        };
        Insert: {
          action_items?: Json | null;
          advisor_id?: string | null;
          ai_summary?: string | null;
          compliance_flags?: Json | null;
          created_at?: string;
          fiduciary_notes?: string | null;
          id?: string;
          prospect_id?: string | null;
          transcript_text?: string | null;
        };
        Update: {
          action_items?: Json | null;
          advisor_id?: string | null;
          ai_summary?: string | null;
          compliance_flags?: Json | null;
          created_at?: string;
          fiduciary_notes?: string | null;
          id?: string;
          prospect_id?: string | null;
          transcript_text?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "meetings_advisor_id_fkey";
            columns: ["advisor_id"];
            isOneToOne: false;
            referencedRelation: "advisors";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "meetings_prospect_id_fkey";
            columns: ["prospect_id"];
            isOneToOne: false;
            referencedRelation: "prospects";
            referencedColumns: ["id"];
          },
        ];
      };
      onboarding_checklists: {
        Row: {
          agreement_signed: boolean | null;
          bank_linked: boolean | null;
          docs_uploaded: boolean | null;
          id: string;
          kyc_complete: boolean | null;
          progress_percent: number | null;
          prospect_id: string;
          risk_questionnaire_score: number | null;
          updated_at: string;
        };
        Insert: {
          agreement_signed?: boolean | null;
          bank_linked?: boolean | null;
          docs_uploaded?: boolean | null;
          id?: string;
          kyc_complete?: boolean | null;
          progress_percent?: number | null;
          prospect_id: string;
          risk_questionnaire_score?: number | null;
          updated_at?: string;
        };
        Update: {
          agreement_signed?: boolean | null;
          bank_linked?: boolean | null;
          docs_uploaded?: boolean | null;
          id?: string;
          kyc_complete?: boolean | null;
          progress_percent?: number | null;
          prospect_id?: string;
          risk_questionnaire_score?: number | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "onboarding_checklists_prospect_id_fkey";
            columns: ["prospect_id"];
            isOneToOne: false;
            referencedRelation: "prospects";
            referencedColumns: ["id"];
          },
        ];
      };
      prospects: {
        Row: {
          advisor_id: string;
          created_at: string;
          email: string;
          fit_score: number | null;
          full_name: string;
          id: string;
          investable_assets_range: string | null;
          next_action: string | null;
          pain_point: string | null;
          phone: string | null;
          source: string | null;
          status: string | null;
          timeline: string | null;
        };
        Insert: {
          advisor_id: string;
          created_at?: string;
          email: string;
          fit_score?: number | null;
          full_name: string;
          id?: string;
          investable_assets_range?: string | null;
          next_action?: string | null;
          pain_point?: string | null;
          phone?: string | null;
          source?: string | null;
          status?: string | null;
          timeline?: string | null;
        };
        Update: {
          advisor_id?: string;
          created_at?: string;
          email?: string;
          fit_score?: number | null;
          full_name?: string;
          id?: string;
          investable_assets_range?: string | null;
          next_action?: string | null;
          pain_point?: string | null;
          phone?: string | null;
          source?: string | null;
          status?: string | null;
          timeline?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "prospects_advisor_id_fkey";
            columns: ["advisor_id"];
            isOneToOne: false;
            referencedRelation: "advisors";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    keyof DefaultSchema["CompositeTypes"] | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
