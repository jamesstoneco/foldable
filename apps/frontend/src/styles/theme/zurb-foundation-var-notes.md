# Zurb Foundation to ShadCN Theme Mapping

## Color Variables

| Foundation Color | ShadCN Variable | UI Usage | Notes |
|-----------------|----------------|----------|-------|
| Primary (#1779ba) | `--primary` | Default buttons, links, important UI elements | Main brand color |
| Secondary (#767676) | `--secondary` | Secondary buttons, less prominent UI elements | Complementary to primary |
| Success (#3adb76) | `--accent` | Success states, positive actions | Currently mapped to accent |
| Alert (#cc4b37) | `--destructive` | Error states, destructive actions | Direct mapping |
| Warning (#ffae00) | Not mapped | Warning states | Consider adding if needed |

## UI Pattern Mapping

| ShadCN Button Variant | CSS Variables Used | Foundation Equivalent |
|----------------------|-------------------|----------------------|
| default | `--primary`, `--primary-foreground` | Primary button |
| outline | `--primary` (border/text) | Secondary button with border |
| ghost | `--primary` (hover states) | Transparent button |
| destructive | `--destructive`, `--destructive-foreground` | Alert button |
| secondary | `--secondary`, `--secondary-foreground` | Secondary button |
| link | `--primary` (text) | Text link |

## Future Considerations

1. **Spacing Variables**
   - ShadCN doesn't use CSS variables for spacing
   - Currently relies on Tailwind's spacing scale
   - Consider adding Foundation's spacing scale as CSS variables:
     - `--spacing-xxs` (0.25rem)
     - `--spacing-xs` (0.5rem)
     - `--spacing-sm` (0.75rem)
     - `--spacing-md` (1rem)
     - `--spacing-lg` (1.5rem)
     - `--spacing-xl` (2rem)
     - `--spacing-xxl` (3rem)

2. **Color System Enhancement**
   - Consider adding Foundation's success/warning colors as dedicated variables
   - Evaluate if `--accent` should be split into `--success` and `--accent`
   - Review if warning states need dedicated styling

3. **Component Theme Consistency**
   - Ensure all components use the same variable naming pattern
   - Document any deviations from ShadCN's standard patterns
   - Consider creating a style guide for custom components 
